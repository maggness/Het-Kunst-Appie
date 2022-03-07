import {getAndRenderData} from './modules/getAndRenderData.js'
import './modules/search.js'
import './routes/routie.js'

routie({
    '': () => {
        getAndRenderData()
    },
    'art/:id': (id) => {
        getAndRenderData(id)
    }
});