import { useHistory } from "react-router-dom";
import qs from "querystring";

const useUrlParams = () => {
	const history = useHistory();
	return qs.parse(history.location.search.replace("?", ""));
};

export default useUrlParams;
