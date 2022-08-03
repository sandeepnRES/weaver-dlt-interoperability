/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GluegunCommand } from 'gluegun'
import { commandHelp } from '../helper/helper'

const command: GluegunCommand = {
  name: 'state',
  alias: ['a'],
  description: 'Simple State Management',
  run: async toolbox => {
    const { print } = toolbox
    print.info('Command does nothing by itself')
    commandHelp(print, toolbox, 'besu-cli state', '', [], command, [
      'state'
    ])
    return
  }
}

module.exports = command
