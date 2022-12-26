// added a custom router to be able to use the history object information in the components that are connected to redux store.
// as a result, i can use connect and avoid using useSelector and useDispatch in the components.
import React from "react";
import { Router} from "react-router-dom";

const CustomRouter = ({ basename, children, history }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
