// import 'bootstrap/dist/css/bootstrap.css';
// import 'datatables.net-bs/js/dataTables.bootstrap';
// import 'datatables.net-bs/css/dataTables.bootstrap.css';

global.$ = global.jQuery = require('jquery');
jQuery = global.$
global.moment = require('moment');

require('chosen-js')
require('chosen-js/chosen.css')
require('chosen-bootstrap-theme')

import 'jquery-ui/themes/base/menu.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/slider.css';
import 'yadcf/jquery.dataTables.yadcf.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';


import 'jquery-ui/ui/widgets/autocomplete';
import 'jquery-ui/ui/widgets/slider';
import 'eonasdan-bootstrap-datetimepicker';
import yadcf from 'yadcf';
import DataTable from 'datatables.net';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

require('./yadcf-bootstrap-monkeypatch.css')

require('file?name=[name].[ext]!./yadcf.html');