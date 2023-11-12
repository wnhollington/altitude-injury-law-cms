import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { cloudinaryAssetSourcePlugin } from 'sanity-plugin-cloudinary'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'
import { 
  dashboardTool,
  sanityTutorialsWidget,
  projectInfoWidget,
  projectUsersWidget,
} from "@sanity/dashboard";
import { netlifyTool } from 'sanity-plugin-netlify'

export default defineConfig({
  name: 'default',
  title: 'Altitude Law CMS',

  projectId: 'ozfpkh12',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool(),
    cloudinaryAssetSourcePlugin(),
    cloudinarySchemaPlugin(),
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ]
    }),
    netlifyTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})