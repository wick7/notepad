import TYPE_INFO from './../utils/type_info.js'
import SaveIcon from './../assets/new.svg'
import DeleteIcon from './../assets/delete.svg'
import EditIcon from './../assets/edit.svg'

const BUTTONS_DATA = [
    {
        key: 'create',
        type: TYPE_INFO.CREATE,
        content: SaveIcon,
        tooltip: 'Create Note'
    },
    {
        key: 'edit',
        type: TYPE_INFO.EDIT,
        content: EditIcon,
        tooltip: 'Edit Note'
    },
    {
        key: 'delete',
        type: TYPE_INFO.DELETE,
        content: DeleteIcon,
        tooltip: 'Delete Note'
    },
]

export default BUTTONS_DATA;