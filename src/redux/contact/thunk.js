import { notifyAdd, notifyDelete } from "components/Toastify/toastify";

const { createAsyncThunk } = require("@reduxjs/toolkit")
const { getAllToDo, addContact, deleteContact, updateContact } = require("api/contacts")

export const getAllthunk = createAsyncThunk('contact/getAll', async (_, { rejectWithValue }) => {
    try {
        const result = await getAllToDo();
        return result;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const addNewContactThunk = createAsyncThunk('contact/addNewContact', async (data, { rejectWithValue }) => {
    try {
        const response = await addContact(data)
        notifyAdd();
        return response;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const deleteContactThunk = createAsyncThunk('contact/deleteContact', async (id, { rejectWithValue }) => {
    try {
        await deleteContact(id);
        notifyDelete();
        return id;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})

export const updateContactThunk = createAsyncThunk('contact/updateContact', async (data, { rejectWithValue }) => {
    try {
        const upData = await updateContact(data);

        return upData;
    } catch (e) {
        return rejectWithValue(e.massage);
    }
})