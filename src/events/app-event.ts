export enum EventType {
  user_api_token_created = 'user_api_token_created',
  user_api_token_updated = 'user_api_token_updated',
  user_api_token_deleted = 'user_api_token_deleted',
  user_org_created = 'user_org_created',
  org_updated = 'org_updated',
  org_invite_added = 'org_invite_added',
  org_invite_deleted = 'org_invite_deleted',
  org_invite_accepted = 'org_invite_accepted',
  org_invite_declined = 'org_invite_declined',
  org_member_joined = 'org_member_joined',
  org_member_updated = 'org_member_updated',
  org_member_deleted = 'org_member_deleted',
  org_hook_created = 'org_hook_created',
  org_hook_updated = 'org_hook_updated',
  org_hook_deleted = 'org_hook_deleted',
  org_team_added = 'org_team_added',
  team_updated = 'team_updated',
  team_deleted = 'team_deleted',
  team_member_added = 'team_member_added',
  team_member_deleted = 'team_member_deleted',
  team_hook_created = 'team_hook_created',
  team_hook_updated = 'team_hook_updated',
  team_hook_deleted = 'team_hook_deleted',
  team_site_added = 'team_site_added',
  site_updated = 'site_updated',
  site_deleted = 'site_deleted',
  site_hook_created = 'site_hook_created',
  site_hook_updated = 'site_hook_updated',
  site_hook_deleted = 'site_hook_deleted',
  site_token_added = 'site_token_added',
  site_token_deleted = 'site_token_deleted',
  site_release_created = 'site_release_created',
  site_release_renamed = 'site_release_renamed',
  site_release_deleted = 'site_release_deleted',
  site_branch_added = 'site_branch_added',
  site_branch_updated = 'site_branch_updated',
  site_branch_deleted = 'site_branch_deleted',
  site_branch_release_set = 'site_branch_release_set',
  site_branch_release_updated = 'site_branch_release_updated',
  site_branch_password_set = 'site_branch_password_set',
  site_branch_password_removed = 'site_branch_password_removed',
  site_branch_redirects_set = 'site_branch_redirects_set',
}
