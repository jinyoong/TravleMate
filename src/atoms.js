import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const tempState = atom({
  key: 'tempState',
  default: 'default',
  effects_UNSTABLE: [persistAtom],
})

const temp2State = atom({
  key: 'temp2State',
  default: 'default',
  effects_UNSTABLE: [persistAtom],
})

const toggleState = atom({
  key: "toggleState",
  default: "post",
  effects_UNSTABLE: [persistAtom],
})

const modalState = atom({
  key: "modalState",
  default: false,
  effects_UNSTABLE: [persistAtom],
})

const paidModalState = atom({
  key: "paidModalState",
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export {
  tempState,
  temp2State,
  toggleState,
  modalState,
  paidModalState,
}