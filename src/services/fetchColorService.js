import axiosWithAuth from '../helpers/axiosWithAuth';
import ColorList from '../components/ColorList';

const fetchColorService = (setColors) => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res=>{
        setColors(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

export default fetchColorService;