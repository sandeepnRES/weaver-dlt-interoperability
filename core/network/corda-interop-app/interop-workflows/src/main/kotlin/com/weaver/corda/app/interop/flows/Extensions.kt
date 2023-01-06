/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.weaver.corda.app.interop.flows

import java.util.Base64
import com.google.protobuf.ByteString

fun ByteArray.toBase64(): String = 
    String(Base64.getEncoder().encode(this))
    
fun ByteString.toBase64(): String = 
    String(Base64.getEncoder().encode(this.toByteArray()))