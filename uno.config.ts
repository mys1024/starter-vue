import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  type Rule,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: rules(),
});

/**
 * Custom rules.
 */
function rules(): Rule[] {
  return [
    /**
     * e.g. `flex-x`, `flex-xr`, `flex-y`, `flex-yr`, `flex-x-4`, `flex-xr-8px`
     */
    [
      /^flex-(x|xr|y|yr)(-(\w+))?$/,
      ([, axis, , size]) => ({
        display: 'flex',
        'flex-direction':
          axis === 'x'
            ? 'row'
            : axis === 'xr'
              ? 'row-reverse'
              : axis === 'y'
                ? 'column'
                : 'column-reverse',
        'align-items': axis.startsWith('x') ? 'center' : undefined,
        gap: size ? (size.match(/^\d+$/) ? `${parseInt(size) / 4}em` : size) : '8px',
      }),
      {
        autocomplete: (() => {
          const result: string[] = [];
          const axises = ['x', 'xr', 'y', 'yr'];
          const sizes = [1, 2, 4, 8, 16, '1px', '2px', '4px', '8px', '16px', '32px', '64px'];
          axises.forEach((axis) => {
            result.push(`flex-${axis}`);
            sizes.forEach((size) => {
              result.push(`flex-${axis}-${size}`);
            });
          });
          return result;
        })(),
      },
    ],
  ];
}
