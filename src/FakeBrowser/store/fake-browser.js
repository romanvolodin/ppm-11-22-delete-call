import { defineStore } from 'pinia'

export const useFakeBrowserStore = defineStore('fakeBrowser', {
  actions: {
    activeTab() {
      return this.tabs.filter(function (tab) {
        return tab.active === true
      })
    },
  },
  state: () => ({
    activeAddress: 'https://activeaddress.com/',
    tabs: [
      {
        active: false,
        address: 'Введите адрес или поисковый запрос',
        favicon: '',
        title: 'Новая вкладка',
      },
      {
        active: true,
        address: 'https://activeaddress.com/in-browser-bar/',
        favicon: '',
        title: 'Заголовок активной вкладки',
      },
    ],
  }),
})
