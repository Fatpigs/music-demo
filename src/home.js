
require("expose-loader?$!../vendors/jquery.min.js");
require("expose-loader?AV!../vendors/av-min.js");


import {av_init} from './av-init';
import {getsong_home} from './getsong-home';
import {gettype_home} from './gettype-home';
import {tabs_home} from './tabs-home';
import './reset.css'
import './home.css'

av_init()
tabs_home($)
getsong_home($,AV)
gettype_home($,AV)
