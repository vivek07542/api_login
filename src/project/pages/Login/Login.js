import React from 'react'
import "./Login.css";
import Heading from '../../../common/components/Heading/Heading';
import Button from "../../../common/components/Button/Button";
import HyperLink from '../../../common/components/HyperLink/HyperLink';
import Header from '../../../common/components/Header/Header';
// import { Link } from "react-router-dom";

const Login = () => {
    const loginHandler = async () => {
        try {
            // window.location.href = 'https://52.172.249.83:3000/login';
            window.location.href = 'https://43.204.148.213:4000/auth/signin';
            // window.location.href = 'https://localhost:4000/auth/signin';
            // window.location.href = 'https://localhost:4000/';
            // <Link to="/redirect"/>
        }
        catch (err) {
            console.log("error");
        }
    }
    return (
        <div className="login-screen--color">
            <Header/>
            <Heading className='heading-login'>Sample Client WebApp</Heading>
            <h6 className='sub-heading-login'>Using Azure AD-PKCE and Azure APIM</h6>
            <div className="container login-form--container text-center ">
                <div className="fluid-container mb-4">
                    <Button type="button" className="login-button--color" onClick={() =>loginHandler() }>Login Page</Button>
                    {/* <Link to="/redirect/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIxNGJmZGMwNC1hZDg1LTQ2ZmYtYjc3Ny02NWU2MTdiYWJmYjMiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODBjMmRiOWQtYjYwOS00MjhjLWFmMjAtZWRjNTdiODQ3ZTA0L3YyLjAiLCJpYXQiOjE2Mzg1MjI2NDAsIm5iZiI6MTYzODUyMjY0MCwiZXhwIjoxNjM4NTI3MjA2LCJhaW8iOiJBVFFBeS84VEFBQUFJZGxQY1hIalpMMlUzM0I0eHBUSXdXRjhrUjhuMk5Kc0Z4UFBUcy9iRGgwMUltUDBCNVA5NGtSQ1NSclFtU2NvIiwiYXpwIjoiMTRiZmRjMDQtYWQ4NS00NmZmLWI3NzctNjVlNjE3YmFiZmIzIiwiYXpwYWNyIjoiMSIsIm5hbWUiOiJQcm9kdWN0MSBVc2VyMSIsIm9pZCI6IjkwYmJmOTE0LTJkMjItNGU2ZS1iMjNiLWU5NzY1YWRjYWI5OSIsInByZWZlcnJlZF91c2VybmFtZSI6InByb2R1Y3QxdXNlcjFAc291dmlrbWlzaHJhcHVyc3VpdHNvZnR3YXJlLm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BU3NBbmR2Q2dBbTJqRUt2SU8zRmU0Ui1CQVRjdnhTRnJmOUd0M2RsNWhlNnY3TXJBRDguIiwic2NwIjoiVXNlci5SZWFkIiwic3ViIjoiWGR1RnVpZ3ZIcVY4SG1idWFmY0FnYWJ1dVI5dTVlWTJuWlBVWFBoekNlcyIsInRpZCI6IjgwYzJkYjlkLWI2MDktNDI4Yy1hZjIwLWVkYzU3Yjg0N2UwNCIsInV0aSI6Imc2TmtMeW1MZ1V1T1VwWXNhR2xhQUEiLCJ2ZXIiOiIyLjAifQ.YVO34KXCehJsWfa_5IQ53aoDGjtlRXvTmIMTy3UlT2liNeIzzpLemYu0qwOfXQjkPekQvOf42al6pF7YOrZOXeuwebiRZXetIyGiu0BVUunH2iiMiUVQrfsXNTBKe2Xb5rOnszygxVtYcNXllqIvIUwb88Y1KXzTtPJRasdHR0Aiv7Yhx5PX_WrImRMb6np6gx0nPFsg43uB2nAAQcl2OQHUB18kqot7VHXtNVQ5QYnbcgpq2AUOMXDwiahZjjo5RHz9ICgZ6dLR2ck6loY1gnLgH7lBCMWoH69ZhQoVa-6nHjznBKCwh-6jmC_z2VWhDr8l3RztMRzmtaIPLsCrtg/44736475-39d1-4ea5-b9ee-7027ae8248a5#">Click</Link> */}
                </div>
                <div className="fluid-container">
                    <HyperLink href="/#">Forgot Password?</HyperLink>
                </div>
            </div>
        </div>
    )
}
export default Login
