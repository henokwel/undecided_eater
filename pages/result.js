import React from 'react';
import { useRouter } from 'next/router';

const Result = () => {
    const router = useRouter()
    console.log('Result', router.query);


    return <div><h1>Result</h1></div>;
};



export default Result;