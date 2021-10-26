import {NavigatorScreenParams} from '@react-navigation/core';
import {EventScreenParams} from '../Events/navigation/EventScreenParams';

export type DrawerScreenParams = {
  GoogleConfig: undefined;
  TelegramProfile: undefined;
  Stories: undefined;
  EventsIOS: NavigatorScreenParams<EventScreenParams>;
  CastleCrashers: undefined;
};
