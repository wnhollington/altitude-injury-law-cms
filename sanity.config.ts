import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { cloudinaryAssetSourcePlugin } from 'sanity-plugin-cloudinary'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'altitude-law-cms',

  projectId: 'ozfpkh12',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool(),
    cloudinaryAssetSourcePlugin(),
    cloudinarySchemaPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
})
