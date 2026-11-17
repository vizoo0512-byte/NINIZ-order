window.NINIZ={
  // 暫停接單：改成 true，頁面會顯示暫停提示並停用複製訂單
  paused:false,
  pausedMsg:"目前暫停接單，請先私訊官方 LINE 詢問檔期",
  // 已售完品項：填品項全名，例如 ["抹茶瑪德蓮","Oreo 棉花糖"]
  soldOut:[],
  // 每個時段最多接幾單
  max:10,
  // 各時段已接單數：格式 "日期 時間":人數
  slots:{}
};
