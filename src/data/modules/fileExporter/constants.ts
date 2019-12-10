export const BOARD_BASIC_INFOS = [
  'userId',
  'createdAt',
  'order',
  'name',
  'closeDate',
  'reminderMinute',
  'isComplete',
  'description',
  'assignedUsers',
  'watchedUserIds',
  'labelIds',
  'stageId',
  'initialStageId',
  'modifiedAt',
  'modifiedBy',
  'priority',
];

export const USER_BASIC_INFOS = [
  'username',
  'isOwner',
  'email',
  'getNotificationByEmail',
  'isActive',
  'brandIds',
  'groupIds',
  'doNotDisturb',
];

export const BRAND_BASIC_INFOS = ['code', 'name', 'description', 'userId', 'createdAt'];

export const CHANNEL_BASIC_INFOS = [
  'createdAt',
  'name',
  'description',
  'conversationCount',
  'openConversationCount',
  'userId',
  'integrationIds',
  'memberIds',
];

export const PERMISSION_BASIC_INFOS = ['module', 'action', 'userId', 'groupId', 'requiredActions', 'allowed'];

export const CUSTOMER_BASIC_INFOS = [
  'firstName',
  'lastName',
  'primaryEmail',
  'primaryPhone',
  'ownerId',
  'position',
  'department',
  'leadStatus',
  'lifecycleState',
  'hasAuthority',
  'description',
  'doNotDisturb',
];

export const COMPANY_BASIC_INFOS = [
  'primaryName',
  'size',
  'industry',
  'website',
  'plan',
  'primaryEmail',
  'primaryPhone',
  'leadStatus',
  'lifecycleState',
  'businessType',
  'description',
  'doNotDisturb',
];

export const PRODUCT_BASIC_INFOS = ['name', 'categoryCode', 'type', 'description', 'sku', 'code', 'unitPrice'];