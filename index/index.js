{
  "pages": [
    "pages/index/index",
    "pages/mine/mine",
    "pages/people/people",
    "pages/logs/logs"
  ],
    "window": {
    "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#000000",
        "navigationBarTitleText": "首页",
          "navigationBarTextStyle": "white"
  },
  "tabBar": {
    "color": "#696969",
      "selectedColor": "#339BFF",
        "borderStyle": "black",
          "backgroundColor": "#ffffff",
            "list": [
              {
                "pagePath": "pages/index/index",
                "iconPath": "images/index_tab_index.png",
                "selectedIconPath": "images/index_tab_index_p.png",
                "text": "首页"
              },
              {
                "pagePath": "pages/people/people",
                "iconPath": "images/index_tab_mission.png",
                "selectedIconPath": "images/index_tab_mission_p.png",
                "text": "朋友"
              },
              {
                "pagePath": "pages/mine/mine",
                "iconPath": "images/index_tab_archives.png",
                "selectedIconPath": "images/index_tab_archives_p.png",
                "text": "个人"
              }
            ]
  },
  "networkTimeout": {
    "request": 10000,
      "downloadFile": 10000
  },
  "debug": true
}