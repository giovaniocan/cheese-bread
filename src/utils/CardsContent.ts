import Pote1Kg from '../../public/products/pote1Kg.svg'
import balde4Kg from '../../public/products/balde4Kg.svg'

import pqCongelado25 from '../../public/products/congelado25.svg'
import packCongelado25 from '../../public/products/packCongelado25.svg'

import pqCongelado50 from '../../public/products/congelado50.svg'
import packCongelado50 from '../../public/products/packCongelado50.svg'

import pqCongelado85 from '../../public/products/congelado85.svg'
import packCongelado85 from '../../public/products/packCongelado85.svg'

import chipaTradicional from '../../public/products/chipaTradicional.svg'
import packChipaTradicional from '../../public/products/packChipaTradicional.svg'

import chipaTemperada from '../../public/products/chipaTemperada.svg'
import packChipaTemperada from '../../public/products/packChipaTemperada.svg'

import chipaPalito from '../../public/products/chipaPalito.svg'
import packChipaPalito from '../../public/products/packChipaPalito.svg'

export const Cards = [
  {
    id: 1,
    title: 'Pão de queijo',
    products: [
      {
        id: 1,
        name: 'Pão de Queijo de Pote 1 Kg',
        image: Pote1Kg,
        carouselImage: null,
        shortDescription:
          'Delicie-se com nosso pão de queijo de pote de 1kg. Sabor irresistível e praticidade em uma única opção.',
        longDescription:
          'Descubra o prazer irresistível e a conveniência em uma única opção com o nosso delicioso pão de queijo de pote de 1kg. Uma experiência culinária que vai encantar o seu paladar.',
        weight: '1 Kg',
      },

      {
        id: 2,
        name: 'Pão de Queijo de Balde 4 Kg',
        image: balde4Kg,
        carouselImage: null,
        shortDescription:
          'Praticidade do nosso pão de queijo de pote de 4kg. Sabor excepcional em uma opção em abundância.',
        longDescription:
          'Desfrute da praticidade do nosso incrível pão de queijo de balde de 4kg, oferecendo uma opção abundante com um sabor excepcional. Experimente a delícia em grande escala que vai surpreender o seu paladar.',
        weight: '4 Kg',
      },
    ],
  },

  {
    id: 2,
    title: 'Pão de queijo congelado',
    products: [
      {
        id: 1,
        name: 'Pão de queijo congelado - 25g',
        image: pqCongelado25,
        carouselImage: packCongelado25,
        shortDescription:
          ' Sabor irresistível para lanches rápidos e deliciosos.',
        longDescription:
          'Descubra o sabor irresistível que vai elevar seus lanches rápidos a um nível de deliciosidade incomparável. Uma explosão de sabores que fará cada mordida uma verdadeira experiência gastronômica.',
        weight: 'kg1 e 2kg',
      },

      {
        id: 2,
        name: 'Pão de queijo congelado - 50g',
        image: pqCongelado50,
        carouselImage: packCongelado50,
        shortDescription: 'Sabor autêntico para qualquer momento do dia.',
        longDescription:
          'Desfrute do sabor autêntico que vai tornar qualquer momento do seu dia ainda mais especial. Uma experiência deliciosa que pode ser apreciada a qualquer hora, seja no café da manhã, no almoço ou no jantar.',
        weight: 'kg1 e 2kg',
      },

      {
        id: 3,
        name: 'Pão de queijo congelado - 85g',
        image: pqCongelado85,
        carouselImage: packCongelado85,
        shortDescription:
          'Textura macia e aroma delicioso para eventos especiais.',
        longDescription:
          'Descubra o sabor autêntico e irresistível do nosso pão de queijo congelado de 85g. Com sua textura macia e aroma delicioso, é perfeito para eventos especiais e ocasiões festivas',
        weight: '2kg',
      },
    ],
  },

  {
    id: 3,
    title: 'Chipa',
    products: [
      {
        id: 1,
        name: 'Chipa sabor tradicional',
        image: chipaTradicional,
        carouselImage: packChipaTradicional,
        shortDescription:
          'Sabor autêntico e irresistível, perfeito para todos.',
        longDescription:
          'Experimente o sabor autêntico e irresistível que é perfeito para agradar a todos. Uma opção deliciosa que vai encantar os paladares mais exigentes, garantindo momentos de prazer e satisfação.',
        weight: 'kg1 e 2kg',
      },

      {
        id: 2,
        name: 'Chipa temperada',
        image: chipaTemperada,
        carouselImage: packChipaTemperada,
        shortDescription: 'Explosão de sabores especiais e irresistíveis.',
        longDescription:
          'Deixe-se envolver por uma explosão de sabores especiais e irresistíveis que vão despertar seus sentidos. Uma combinação perfeita de ingredientes.',
        weight: 'kg1 e 2kg',
      },

      {
        id: 3,
        name: 'Chipa tradicional palito',
        image: chipaPalito,
        carouselImage: packChipaPalito,
        shortDescription: 'Sabor clássico em formato prático e delicioso.',
        longDescription:
          'Desfrute do sabor clássico em um formato prático e delicioso, que une tradição e praticidade em cada mordida. Uma opção irresistível que proporciona uma experiência memorável.',
        weight: 'kg1 e 2kg',
      },
    ],
  },
]
