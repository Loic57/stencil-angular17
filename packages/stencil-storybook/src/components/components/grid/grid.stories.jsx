import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Components/Grid',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Le composant grid permet de structurer des éléments en colonnes.</Subtitle>
          <ap-paragraph>Une grille dispose de 12 colonnes, comme ci-dessous.</ap-paragraph>
          <Canvas of={Default} />

          <ap-paragraph>
            Il est possible d'étendre des colonnes pour qu'elles soient aussi larges que plusieurs colonnes.
            Dans l'exemple ci-dessous nous avons seulement 3 colonnes mais chacune d'elle fait l'équivalent de 4 colonnes.
          </ap-paragraph>
          <Canvas of={Default2} />

          <ap-paragraph>
            Dans certains cas il est nécessaire d'avoir des colonnes qui n'ont pas toutes la même largueur.
          </ap-paragraph>
          <Canvas of={customWidths} />

          <ap-paragraph>
            Lorsqu'une ligne (row) atteint 12 colonnes, la prochaine colonne ira à la ligne. Il faut alors utiliser la propriété row-gap pour créer des sauts de ligne.
          </ap-paragraph>
          <Canvas of={RowGap} />

          <ap-paragraph>
            En fonction des résolutions d'écrans la taille des colonnes peut varier, il est possible d'ajouter des classes sur les colonnes en commençant par la résolution la plus petite pour finir sur la plus grande, voir le code de l'exemple ci-dessous.
          </ap-paragraph>
          <Canvas of={Responsive} />
        </>
      ),
    }
  }
};

export const Default = {
  render: () => <div className='ap-container'>
    <ap-grid>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>1</ap-paragraph></div>
    </ap-grid>
  </div>
}

export const Default2 = {
  render: () => <div className='ap-container'>
    <ap-grid>
      <div className='ap-grid__col example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col example'><ap-paragraph>4</ap-paragraph></div>
    </ap-grid>
  </div>
}

export const customWidths = {
  render: () => <div className='ap-container'>
    <ap-grid>
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-5 example'><ap-paragraph>5</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-1 example'><ap-paragraph>1</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-2 example'><ap-paragraph>2</ap-paragraph></div>
    </ap-grid>
  </div>
}

export const RowGap = {
  render: () => <div className='ap-container'>
    <ap-grid row-gap="32">
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
    </ap-grid>
  </div>
}

export const Responsive = {
  render: () => <div className='ap-container'>
    <ap-grid row-gap="32">
      <div className='ap-grid__col ap-grid__col-4 ap-grid__col-md-6 ap-grid__col-lg-10 example'><ap-paragraph>4 / md-6 / lg-10</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 ap-grid__col-4 ap-grid__col-sm-5 ap-grid__col-lg-8 example'><ap-paragraph>4 / sm-5 / lg-8</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 ap-grid__col-4 example'><ap-paragraph>4</ap-paragraph></div>
      <div className='ap-grid__col ap-grid__col-4 ap-grid__col-2 ap-grid__col-md-4 example'><ap-paragraph>2 / md-4</ap-paragraph></div>
    </ap-grid>
  </div>
}
