import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['ap-input'],
    event: 'inputTyping',
    targetAttr: 'value',
    type: 'text',
  },
];

export const config: Config = {
  namespace: 'ap-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets', warn: true }
      ]
    },
    angularOutputTarget({
      componentCorePackage: 'ap-web-components',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/ap-web-components/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/ap-web-components/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    })
  ],
  // Tous ces fichiers permettent de créer le fichier css ap-web-components.css dans dist/ap-web-components
  globalStyle: 'src/styles/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss',
        'src/styles/functions/strip-unit.scss',
        'src/styles/functions/map-deep-get.scss',
        'src/styles/utils/texts.scss',
        'src/styles/utils/spacings.scss',
        'src/styles/utils/colors.scss'
      ],
    }),
  ],
  buildDist: true
};
