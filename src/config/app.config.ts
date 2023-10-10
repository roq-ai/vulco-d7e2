interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Medical Staff', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'Vulco',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read organization information'],
  ownerAbilities: ['Manage user information', 'Manage organization information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/77a4d9da-1d2d-498d-8766-c23e482b02f7',
};
