/*
 * @Author: siwenfeng
 * @Date: 2020-06-12 17:25:39
 * @LastEditTime: 2020-06-16 19:48:18
 * @Description: this is ....
 */
import Vue from 'vue'
import { LocaleProvider } from 'ant-design-vue'
import {
  Anchor,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Icon,
  Input,
  Layout,
  message,
  Menu,
  Modal,
  Pagination,
  Radio,
  Row,
  Select,
  Table,
  Skeleton,
  Comment,
  Empty, Popover, Badge, Tabs, InputNumber, Collapse, TreeSelect, Popconfirm,
  Drawer, Spin, Carousel, Upload, Statistic, Progress, Tag, Cascader
} from 'ant-design-vue';

Vue.prototype.$message = message;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.component(LocaleProvider.name, LocaleProvider)
Vue.use(Anchor);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Divider)
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Pagination);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Select);
Vue.use(Table);
Vue.use(Skeleton);
Vue.use(Comment);
Vue.use(Empty);
Vue.use(Popover)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(InputNumber)
Vue.use(Collapse)
Vue.use(TreeSelect)
Vue.use(Popconfirm)
Vue.use(Drawer)
Vue.use(Spin)
Vue.use(Carousel)
Vue.use(Upload)
Vue.use(Statistic)
Vue.use(Progress)
Vue.use(Tag)
Vue.use(Cascader)
