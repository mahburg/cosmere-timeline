// group events by system field
export const groupEventsBySystem = (events) => {
  const systems = {};
  events.forEach((event) => {
    const { system } = event;
    if (!systems[system]) {
      systems[system] = [];
    }
    systems[system].push(event);
  });
  return systems;
};

export const addEventsToSystems = (systems, events) => {
  const systemsWithEvents = {};
  Object.keys(systems).forEach((system) => {
    systemsWithEvents[system] = {
      ...systems[system],
      name: system,
      events: events[system],
    };
  });
  
  return systemsWithEvents;
}


