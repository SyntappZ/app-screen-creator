const state = () => ({
  mobileImages: [],
  tabletImages: [],
  desktopImages: [],
  screenType: 'mobile'
});

const mutations = {
  concatMobileImages(state, images) {
    state.mobileImages = [...state.mobileImages, ...images];
  },
  concatTabletImages(state, images) {
    state.mobileImages = [...state.tabletImages, ...images];
  },
  concatDesktopImages(state, images) {
    state.mobileImages = [...state.desktopImages, ...images];
  },
  updateScreenType(state, type) {
    state.screenType = type
  }
};

const actions = {
  updateScreenTypeImageStore({ commit }, payload) {
    
    commit('updateScreenType', payload)
  },
  sendImagesToStore({ commit }, payload) {
    const { type, images } = payload;

    switch (type) {
      case "mobile":
        commit("concatMobileImages", images);
        break;
      case "tablet":
        commit("concatTabletImages", images);
        break;
      case "desktop":
        commit("concatDesktopImages", images);
        break;

      default:
        commit("concatMobileImages", images);
    }
  },
};

const getters = {
  currentImages(state) {
    const {screenType, mobileImages, tabletImages, desktopImages} = state
    switch (screenType) {
      case "mobile": return mobileImages
      case "tablet": return tabletImages
      case "desktop": return desktopImages
      default: return mobileImages
    }
  }
};


export default { namespaced: true, state, actions, mutations, getters };
