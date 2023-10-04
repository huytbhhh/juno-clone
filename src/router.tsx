import { createBrowserRouter } from 'react-router-dom'
import Admin from './page/page'
import Hangmoi from './Hang-Moi/hangmoi'
import Sanpham from './SanPham/sanpham'
export const routers = createBrowserRouter([
  {
    path: 'admin',
    element: <Admin/>
  },
  {
    path: 'hangmoi',
    element: <Hangmoi/>
  },
  {
    path: 'sanpham',
    element: <Sanpham/>
  },

])
