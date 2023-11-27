import serviceAxios from ".";

export const getAll =async () => {
      const {data} =  await serviceAxios.post('/goods/goodAll')
          return data
}