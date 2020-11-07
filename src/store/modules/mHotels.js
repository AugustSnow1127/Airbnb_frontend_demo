export default {
  // namespaced: true,
  state: {
    hotels: [
      {
        id: 1,
        name: '寒軒國際大飯店',
        region: '苓雅區',
        backgroundImgUrl: 'https://pix6.agoda.net/hotelImages/666/666/666_17071308270054428767.jpg?s=1024x768',
        commentScore: 8.2,
        numOfComment: 2573,
        discount: 0.27,
        originalPrice: 6600
      },
      {
        id: 2,
        name: '國賓大飯店',
        region: '前金區',
        backgroundImgUrl: 'https://pix6.agoda.net/hotelImages/136/1363/1363_17102012070058100884.jpg?s=1024x768',
        commentScore: 7.9,
        numOfComment: 6948,
        discount: 0.53,
        originalPrice: 4400
      },
      {
        id: 3,
        name: '漢來大飯店',
        region: '前金區',
        backgroundImgUrl: 'https://pix6.agoda.net/hotelImages/384/3843/3843_15070211000031541467.jpg?s=1024x768',
        commentScore: 8.8,
        numOfComment: 4867,
        discount: 0.28,
        originalPrice: 10560
      },
      {
        id: 4,
        name: '高雄85大樓',
        region: '苓雅區',
        backgroundImgUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/205787995.jpg?k=e2e53557d3fe8b38939d16f561a1c51f107f9998213aa2dd99e8068d2e243ae4&o=',
        commentScore: 9.7,
        numOfComment: 565,
        discount: 0.43,
        originalPrice: 3110
      },
      {
        id: 5,
        name: '美麗島捷運站庭園旅宿',
        region: '新興區',
        backgroundImgUrl: 'https://pix6.agoda.net/hotelImages/195/1951504/1951504_17012613270050580662.jpg?s=1024x768',
        commentScore: 9.6,
        numOfComment: 2267,
        discount: 0.3,
        originalPrice: 4280
      },
      {
        id: 6,
        name: '鴨家青年旅館',
        region: '新興區',
        backgroundImgUrl: 'https://pix6.agoda.net/hotelImages/734/734811/734811_16061414010043539704.jpg?s=1024x768',
        commentScore: 9.3,
        numOfComment: 1567,
        discount: 0.23,
        originalPrice: 1734
      },
    ]
  },
  mutations: {
    setHotels(state,value){
      state.hotels=value
    }
  },
  actions: {
    // loadHotels(context){
      // axios.get("https://jsonplaceholder.typicode.com/todos")
      // .then(res=>{
      //   context.commit("setTodos",res.data)
      // })
      // .catch(error=>{
      //   console.log("axios載入失敗")
      // })
    // }
  }
}