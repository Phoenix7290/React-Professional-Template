import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../screens/Home";

import TP1 from "../screens/TP1";
import TP1_01 from "../screens/TP1/01";
import TP1_02 from "../screens/TP1/02";
import TP1_03 from "../screens/TP1/03";
import TP1_04 from "../screens/TP1/04";
import TP1_05 from "../screens/TP1/05";
import TP1_06 from "../screens/TP1/06";
import TP1_07 from "../screens/TP1/07";
import TP1_08 from "../screens/TP1/08";
import TP1_09 from "../screens/TP1/09";
import TP1_10 from "../screens/TP1/10";
import TP1_11 from "../screens/TP1/11";
import TP1_12 from "../screens/TP1/12";
import TP1_13 from "../screens/TP1/13";
import TP1_14 from "../screens/TP1/14";
import TP1_15 from "../screens/TP1/15";
import TP1_16 from "../screens/TP1/16";

import TP2 from "../screens/TP2";
import TP2_01 from "../screens/TP2/01";
import TP2_02 from "../screens/TP2/02";
import TP2_03 from "../screens/TP2/03";
import TP2_04 from "../screens/TP2/04";
import TP2_05 from "../screens/TP2/05";
import TP2_06 from "../screens/TP2/06";
import TP2_07 from "../screens/TP2/07";
import TP2_08 from "../screens/TP2/08";
import TP2_09 from "../screens/TP2/09";
import TP2_10 from "../screens/TP2/10";
import TP2_11 from "../screens/TP2/11";
import TP2_12 from "../screens/TP2/12";
import TP2_13 from "../screens/TP2/13";
import TP2_14 from "../screens/TP2/14";
import TP2_15 from "../screens/TP2/15";
import TP2_16 from "../screens/TP2/16";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },
    {
        path: '/tp1',
        element: <TP1 />,
    },
    {
        path: '/tp1/01',
        element: <TP1_01 />,
    },
    {
        path: '/tp1/02',
        element: <TP1_02 />,
    },
    {
        path: '/tp1/03',
        element: <TP1_03 />,
    },
    {
        path: '/tp1/04',
        element: <TP1_04 />,
    },
    {
        path: '/tp1/05',
        element: <TP1_05 />,
    },
    {
        path: '/tp1/06',
        element: <TP1_06 />,
    },
    {
        path: '/tp1/07',
        element: <TP1_07 />,
    },
    {
        path: '/tp1/08',
        element: <TP1_08 />,
    },
    {
        path: '/tp1/09',
        element: <TP1_09 />,
    },
    {
        path: '/tp1/10',
        element: <TP1_10 />,
    },
    {
        path: '/tp1/11',
        element: <TP1_11 />,
    },
    {
        path: '/tp1/12',
        element: <TP1_12 />,
    },
    {
        path: '/tp1/13',
        element: <TP1_13 />,
    },
    {
        path: '/tp1/14',
        element: <TP1_14 />,
    },
    {
        path: '/tp1/15',
        element: <TP1_15 />,
    },
    {
        path: '/tp1/16',
        element: <TP1_16 />,
    },
    
    // Divisao dos TPs

    {
        path: '/',
        element: <Home />
    },
    {
        path: '/tp2',
        element: <TP2 />,
    },
    {
        path: '/tp2/01',
        element: <TP2_01 />,
    },
    {
        path: '/tp2/02',
        element: <TP2_02 />,
    },
    {
        path: '/tp2/03',
        element: <TP2_03 />,
    },
    {
        path: '/tp2/04',
        element: <TP2_04 />,
    },
    {
        path: '/tp2/05',
        element: <TP2_05 />,
    },
    {
        path: '/tp2/06',
        element: <TP2_06 />,
    },
    {
        path: '/tp2/07',
        element: <TP2_07 />,
    },
    {
        path: '/tp2/08',
        element: <TP2_08 />,
    },
    {
        path: '/tp2/09',
        element: <TP2_09 />,
    },
    {
        path: '/tp2/10',
        element: <TP2_10 />,
    },
    {
        path: '/tp2/11',
        element: <TP2_11 />,
    },
    {
        path: '/tp2/12',
        element: <TP2_12 />,
    },
    {
        path: '/tp2/13',
        element: <TP2_13 />,
    },
    {
        path: '/tp2/14',
        element: <TP2_14 />,
    },
    {
        path: '/tp2/15',
        element: <TP2_15 />,
    },
    {
        path: '/tp2/16',
        element: <TP2_16 />,
    },

]);

export default function routes() {
    return (
        <RouterProvider router={router} />
    );
};