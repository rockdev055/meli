import { Site } from './site';
import { env } from '../../env';
import { URL } from 'url';

const sitesUrl = new URL(env.MELI_SITES_HOST);

export function getSiteUrl(site: Site) {
  return `${sitesUrl.protocol}//${site.name}.${sitesUrl}`;
}
