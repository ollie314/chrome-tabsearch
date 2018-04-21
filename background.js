// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    /*chrome.windows.getAll({populate:true}, winData => {
        var tabs = [];
        for (var i in winData) {
          if (winData[i].focused === true) {
              var winTabs = winData[i].tabs;
              var totTabs = winTabs.length;
              for (var j=0; j<totTabs;j++) {
                tabs.push(winTabs[j].url);
              }
          }
        }
        console.log(tabs);
    });*/
    /*
    var notification = chrome.notifications.create(
        'fe434536-481d-434d-a4c8-46e2cbbac3bf',
        {
            type: 'basic',
            iconUrl: 'assets/images/account_albums_screens_tabs-512.png',
            title: 'Hello!',
            message: 'You have a new mail !'
        },
        notificationId => {
            console.log('notification callback has been called for notification ', notificationId);
        }
      );
    */
  });
});
