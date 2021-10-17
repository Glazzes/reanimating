export type SettingItem = {
  icon: string;
  title: string;
};

export const settings: SettingItem[] = [
  {icon: 'bell-outline', title: 'Notifications and Sounds'},
  {icon: 'lock-outline', title: 'Privacy and security'},
  {icon: 'database-settings', title: 'Data and Storage'},
  {icon: 'chat-outline', title: 'Chat Settings'},
  {icon: 'folder-outline', title: 'Folders'},
  {icon: 'laptop', title: 'Devices'},
  {icon: 'globe-model', title: 'Language'},
];

export const help: SettingItem[] = [
  {icon: 'chat-processing-outline', title: 'Ask a Question'},
  {icon: 'frequently-asked-questions', title: 'Telegram FAQ'},
  {icon: 'shield-check-outline', title: 'Privacy Policy'},
];

export type SectionItem = {
  title: string;
  subtitle: string;
};

export const accountSection: SectionItem[] = [
  {title: '+57 (320) 999-9999', subtitle: 'Tap to change phone number'},
  {title: '@AwesomeGlazzes', subtitle: 'Username'},
  {title: 'Bio', subtitle: 'Add a few words about yourself'},
];
