const NAVIGATION_EVENT = "pushstate";
export function navigate(href) {
  window.history.pushState({}, "", href);
  //crear un evetno persoanlizado
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}
export function Link({ target, to, ...props }) {
  //here is where maked the change of the route
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; //primary click
    const isModifiedEvent =
      event.mateKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";
    //this is for maping the keys to open a new window when you press a specific key            
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };
  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
