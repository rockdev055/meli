import { Sites } from '../entities/sites/site';
import { env } from '../env';
import { generateSiteRoutes } from './config/generate-site-routes';
import { errors } from './config/errors';
import { generateManualCertificatesConfig } from './config/ssl';
import { uiRoute } from './config/ui-route';
import { apiRoute } from './config/api-route';
import { URL } from 'url';

const sitesUrl = new URL(env.MELI_SITES_HOST);

export async function generateConfig(): Promise<any> {
  const sites = await Sites().find().toArray();

  const sslDisabled = sitesUrl.protocol === 'http:';
  return {
    logging: {
      logs: {
        default: {
          level: 'DEBUG',
        },
      },
    },
    admin: {
      disabled: false,
      listen: env.MELI_CADDY_DOCKER ? '0.0.0.0:2019' : '127.0.0.1:2019',
    },
    apps: {
      http: {
        servers: {
          sites: {
            listen: [
              ':80',
              ...(sslDisabled ? [] : [':443']),
            ],
            routes: [
              apiRoute,
              uiRoute,
              ...sites.flatMap(generateSiteRoutes),
              // fallback,
            ],
            errors,
            // ...(sslDisabled ? [] : generateServerTlsConfig(sites)),
          },
        },
      },
      tls: sslDisabled ? undefined : {
        automation: {
          policies: [
            ...(!env.MELI_ACME_SERVER ? [] : [{
              issuer: {
                module: 'acme',
                ca: env.MELI_ACME_SERVER,
                trusted_roots_pem_files: env.MELI_ACME_CA_PATH ? [env.MELI_ACME_CA_PATH] : undefined,
              },
              on_demand: true,
            }]),
          ],
        },
        certificates: generateManualCertificatesConfig(sites),
      },
    },
  };
}
