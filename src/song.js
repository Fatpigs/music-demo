require("expose-loader?$!../vendors/jquery.min.js");
require("expose-loader?AV!../vendors/av-min.js");

import {getsong_song} from './getsong-song';
import {av_init} from './av-init';

av_init()
getsong_song($,AV)

import './reset.css'
import './song.css'

