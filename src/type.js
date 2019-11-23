require("expose-loader?$!../vendors/jquery.min.js");
require("expose-loader?AV!../vendors/av-min.js");

import {gettype_type} from './gettype-type';
import {getsong_type} from './getsong-type';
import {av_init} from './av-init';

import './reset.css'
import './list.css'

av_init()
gettype_type($,AV)
getsong_type($,AV)