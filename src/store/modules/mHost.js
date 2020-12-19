import * as fb from '@/firebase'
// import router from '@/router/index'

export default {
  namespaced: true,
  state: {
    hostRooms: {}
  },
  mutations: {
    setHostRooms(state, form) {
      state.hostRooms = {
        roomID: form.roomID,
        hotelStyle: form.hotelStyle,
        homeStyle: form.homeStyle,
        onlyForTenant: form.onlyForTenant,
        bedrooms: [],
        bathroomNum: form.bathroomNum,
        region: {
          country: form.country,
          street: form.street,
          houseNumber: form.houseNumber,
          city: form.city,
          district: form.district,
          postalCode: form.postalCode,
        },
        equipAndService: {
          necessities: form.necessities,
          wifi: form.wifi,
          television: form.television,
          heating: form.heating,
          aircon: form.aircon,
          iron: form.iron,
          shampoo: form.shampoo,
          hairDryer: form.hairDryer,
          breakfast: form.breakfast,
          desk: form.desk,
          fireplace: form.fireplace,
          closet: form.closet,
          independentEntrance: form.independentEntrance,
          smokeAlarm: form.smokeAlarm,
          carbonMonoxideAlarm: form.carbonMonoxideAlarm,
          aidKit: form.aidKit,
          fireExtinguisher: form.fireExtinguisher,
          lockedRoom: form.lockedRoom,
        },
        space: {
          kitchen: form.kitchen,
          washingMachine: form.washingMachine,
          dryer: form.dryer,
          parkingSpace: form.parkingSpace,
          gym: form.gym,
          swimmingPool: form.swimmingPool,
          jacuzzi: form.Jacuzzi,
        },
        roomIntro: {
          intro: form.intro,
          style: form.style,
          service: form.service,
          districtFeature: form.districtFeature,
          traffic: form.traffic,
        },
        title: form.title,
        landlordInfo : {
          landlordName: form.landlordName,
          phone: form.phone,
          language: form.language,
        },
        houseRules: {
          suitableForChildren: form.suitableForChildren,
          suitableForBaby: form.suitableForBaby,
          suitableForPet: form.suitableForPet,
          smokingAllowed: form.smokingAllowed,
          eventAllowed: form.eventAllowed,
          needToTakeStair: form.needToTakeStair,
          maybeNoisy: form.maybeNoisy,
          havePet: form.havePet,
          noParkingSpace: form.noParkingSpace,
          needToShareSpace: form.needToShareSpace,
          restrictedEquipAndService: form.restrictedEquipAndService,
          undersurveillance: form.undersurveillance,
          withProtectionTool: form.withProtectionTool,
          withDangerousAnimal: form.withDangerousAnimal,
        },
        price: {
          currency: form.currency,
          originalPrice: form.originalPrice,
          discount: form.discount,
        },
        
        imgUrl: form.imgUrl,
        pointer: {
          deepClean: form.deepClean,
          selfCheckIn: form.selfCheckIn,
          greatLandlord: form.greatLandlord,
          unbookPolicy: form.unbookPolicy,
        },
        Precautions: {
          checkInTime: form.checkInTime,
          checkOutTime: form.checkOutTime,
          smoke: form.smoke,
          otherRules: form.otherRules,
        },
      }
    }
  },
  actions: {
    async uploadHostRoom({ dispatch }, form) {
      await fb.usersCollection.doc(form.userID).collection('hostRooms').doc(form.roomID).set({form},{merge: true})
      .then(()=> {
        dispatch('fetchHostRooms', form)
        console.log("uploadHostRoom success")
      }).catch(err => {
        console.log(err);
      })
    },
    async fetchHostRooms({ commit }, form) {
      commit('setHostRooms', form)
      console.log("fetchHostRooms success")
    },
  }
}