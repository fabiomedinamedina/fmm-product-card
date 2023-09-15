# FM Product Card

Este es el componente de un modulo de prueba para desplegar en NPM

## Installation

## Examples

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'fm-product-card';
```

```
<ProductCard
  product={ product }
  initialValues={{
    count: 10,
    maxCount: 12
  }}
>
  {
    () => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```

## Contributing
Want to contribute? Great! Pull requests are allowed ;)

## Author
Fabio Medina [LinkedIn][linkedin] [Website][website]

## License

MIT

[linkedin]: <https://www.linkedin.com/in/fabio-medina-medina/>
[website]: <https://fabiomedina.com/>