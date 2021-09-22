import { writable } from "svelte/store";

const ticketStore = writable([]);

const customTicketStore = {
  subscribe: ticketStore.subscribe,
  addTicket: (ticketData) => {
    const newTicket = {
      ...ticketData,
    };
    ticketStore.update((items) => {
      return [newTicket, ...items];
    });
  },
  updateTicket: (title, ticketData) => {
    ticketStore.update((items) => {
      const ticketIndex = items.findIndex((i) => i.title === title);
      const updatedTicket = { ...items[ticketIndex], ...ticketData };
      const updatedTicketStore = [...items];
      updatedTicketStore[ticketIndex] = updatedTicket;
      return updatedTicketStore;
    });
  },
  removeTicket: (title) => {
    ticketStore.update((items) => {
      return items.filter((i) => i.title !== title);
    });
  },
};

export default customTicketStore;
