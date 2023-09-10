export const handlerAllProducts = (state, { payload }) => {
    state.contacts.items = payload;
}

export const handlerAddNewContact = (state, { payload: { name, id, phone } }) => {
    state.contacts.items.push({ name, id, phone });
}

export const handlerDeleteContact = (state, { payload }) => {
    state.contacts.items = state.contacts.items.filter((el) => el.id !== payload);
}

export const updateContactContact = (state, { payload }) => {
    const array = state.contacts.items;
    let indexContactUpdate;
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === payload.id) {
            indexContactUpdate = index;
            break;
        }
    }
    array[indexContactUpdate] = payload;

}


export const handlePending = (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = '';
}
export const handleFulfilled = (state) => {
    state.contacts.isLoading = false;
}
export const handleRejected = (state, { error }) => {
    state.contacts.isLoading = false;
    state.contacts.error = error.message;
}

