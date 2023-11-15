import type { App } from 'vue';
import { forEach } from 'lodash-es';
import '@/style/index.css';
import * as method from '@/components/Message/method';

import Button from '@/components/Button/VButton.vue';
import Icons from '@/components/Icons/VIcon.vue';
import Input from '@/components/Input/Input.vue';
import Message from '@/components/Message/Message.vue';
import Select from '@/components/Select/Select.vue';
import Tooltip from '@/components/Tooltip/Tooltip.vue';
const components = { Button, Icons, Input, Message, Select, Tooltip };

export const createDemoUI = () => {
  return {
    install: (app: App) => {
      forEach(components, (component) => {
        app.component(`c-${component.name}`, component);
      });
    },
  };
};

export { components };
export { method };
