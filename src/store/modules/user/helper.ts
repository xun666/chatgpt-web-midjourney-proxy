import { ss } from '@/utils/storage'
import { t } from '@/locales'
import { homeStore } from "@/store";
const LOCAL_NAME = 'userStorage'
const backgroundImage = homeStore.myData.session.backgroundImage ?? "https://t.alcy.cc/fj/"

export interface UserInfo {
  avatar: string
  name: string
  backgroundImage: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://lsky.ydxs.xyz:11301/i/2024/08/04/66af32ed7f570.jpg',
      name:  t('YDXS CHAT'),//'AI绘图',
      description: 'LOOK AT <a href="https://halo.ydxs.xyz:11301" class="text-blue-500" target="_blank" >翼动芯生官网</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
