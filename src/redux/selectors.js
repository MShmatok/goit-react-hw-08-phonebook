import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = state => state.contact.contacts.items;
export const selectIsLoading = state => state.contact.isLoading;
export const selectorIsLoading = state => state.contact.isLoading;
const selectFilter = state => state.contact.filter;

export const selectorFilteredContacts = createSelector([selectAllContacts, selectFilter], (allContacts, filter) => {
    return allContacts.filter(item => {
        return item.name
            .trim()
            .toLocaleLowerCase()
            .includes(filter.trim().toLocaleLowerCase());
    })
});