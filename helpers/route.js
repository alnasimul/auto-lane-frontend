import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";


export function withPublic(Component) {
	return function WithPublic(props) {
		const {user} = useContext(AuthContext)
		const router = useRouter()
		useEffect(() => {
			if (user.email) {
				router.push('/')
				//window.location.replace('/')
				return <h1>Loading...</h1>;
			}
		},[user])
		return <Component user={user} {...props} />;
	};
}

export function withProtected(Component) {
	return function WithProtected(props) {
		const {user} = useContext(AuthContext)
		const router = useRouter();

		useEffect(() => {
			if (user.email === '') {

				router.replace("/account/login");
				return <h1>Loading...</h1>;
			}
		},[user])

		return <Component user={user} {...props} />;
	};
}

