const state = {
  userName: '',
  foottype: 1,
  userinfo: {
    share: 'xxxx',
    nickname: '联区001',
    is_agency: 1
  }
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_BOTTOM_TYPE: (state, foottype) => {
    state.foottype = foottype
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  // 底部标签栏显示隐藏
  setBottomType({ commit }, foottype) {
    commit('SET_BOTTOM_TYPE', foottype)
  }
}
export default {
  state,
  mutations,
  actions
}
