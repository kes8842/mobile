import client from '../../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserTp = async () => {
    const localHpNo = await AsyncStorage.getItem('hpNo')
    const localEventCode = await AsyncStorage.getItem('eventCode')
    const result1 = await client.get(`/rest/v1/s0221a0010/user-info?eventCode=${localEventCode}&hpNo=${localHpNo}`)
    if (result1?.data?.data.length > 0) {
        console.log(JSON.stringify(result1, null, 4))
        const { orgId, memberTp, orgEventName, mobileId, memberId, eventCode } = result1?.data?.data[0]
        await AsyncStorage.setItem('orgEventName', orgEventName || '')
        await AsyncStorage.setItem('memberTp', memberTp || '')
        await AsyncStorage.setItem('orgId', JSON.stringify(orgId) || '')
        await AsyncStorage.setItem('memberId', JSON.stringify(memberId) || '')
        await AsyncStorage.setItem('eventCode', eventCode || '')
        return { ...result1?.data?.data[0] }
    }
}

export {
    setUserTp,
}