import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx'; 
import { CloudSettings } from '@ionic-native/cloud-settings/ngx'; 
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { File } from '@ionic-native/file/ngx';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    Tab2PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Tab2Page],
  providers: [  File, SQLite,Network,HTTP, CloudSettings ,Insomnia, BatteryStatus,BackgroundGeolocation,Brightness, BluetoothSerial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2PageModule {}
