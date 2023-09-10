
import { instance } from './auth'


export const getAllToDo = async () => {
    const { data } = await instance('/contacts')
    console.log(data);
    return data
}

export const addContact = async (data) => {
    const response = await instance.post('/contacts', {
        name: data.name,
        number: data.number,
    })
    console.log(response);
    return response.data;
}

export const deleteContact = async (id) => {
    await instance.delete(`/contacts/${id}`)
}

export const updateContact = async ({ id, name, number }) => {
    await instance.patch(`/contacts/${id}`, { name, number });
}
