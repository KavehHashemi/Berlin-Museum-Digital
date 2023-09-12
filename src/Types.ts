export type CompactInstitutionType = {
  institution_id: number;
  institution_name: string;
  institution_place: string;
  institution_url: string;
  institution_image: string;
  institution_collections: number;
  institution_objects: number;
};

export type CollectionType = {
  collection_id: number;
  collection_name: string;
  collection_description: string;
  collection_link: string;
  collection_image: string;
  collection_image_klick: string;
  collection_url: string;
  collection_mail: string;
  collection_last_updated: string;
  collection_number_of_objects: number;
  collection_subcollections: CollectionType[];
};

export type ExhibitionType = {
  exhibition_id: number;
  name: string;
  description: string;
  start: string;
  end: string;
  permanent: boolean;
  image: string;
};

export type DetailedInstitutionType = {
  institution_id: number;
  institution_isil: string;
  institution_name: string;
  institution_telnr: string;
  institution_fax: string;
  institution_image: string;
  institution_image_klick: string;
  institution_url: string;
  institution_mail: string;
  institution_last_updated: string;
  default_sort_by: string;
  default_sort_order: string;
  statistics_accessible: number;
  public_share: string;
  public_share_token: string;
  collections: CollectionType[];
  sameAs: [
    {
      link_text: string;
      link_url: string;
    }
  ];
  upcoming_events: [
    {
      appointment_id: number;
      name: string;
      start: string;
      end: string;
    }
  ];
  exhibitions: {
    ongoing: ExhibitionType[];
    past: ExhibitionType[];
    upcoming: ExhibitionType[];
  };
  object_groups: [
    {
      serie_id: number;
      serie_name: string;
      anzahl_objekte_in_gruppe: number;
    }
  ];
  opening_hours: {
    note: string;
    days: [
      [
        {
          start: string;
          end: string;
          note: string;
        }
      ]
    ];
  };
  accessibility: boolean;
  accessibility_text: string;
  photos_allowed: boolean;
  cloakroom_available: boolean;
  lockers_available: boolean;
  shop_available: boolean;
  cafe_available: boolean;
  babycare_room_available: boolean;
  tickets: [
    {
      name: string;
      price: number;
      currency: string;
      icon: string;
    }
  ];
  faq: {
    en: [
      {
        question: string;
        answer: string;
      }
    ];
  };
  institution_description: string;
  institution_street: string;
  institution_zipcode: string;
  institution_place: string;
  institution_at_association: string;
  institution_longitude: number;
  institution_latitude: number;
  institution_number_of_objects: number;
  expected_language: string;
  subset: string;
};

export type DetailedCollectionType = {
  collection_number_of_objects: number;
  collection_number_of_objects_exclusive: number;
  collection_id: number;
  collection_name: string;
  collection_description: string;
  collection_link: string;
  collection_image: string;
  collection_image_klick: string;
  collection_url: string;
  collection_mail: string;
  collection_last_updated: string;
  collection_institution: {
    institution_id: number;
    institution_name: string;
  };
  collection_supercollections: [
    {
      collection_number_of_objects: number;
      collection_id: number;
      collection_name: string;
    }
  ];
  collection_subcollections: [
    {
      bottop_num_in_set: number;
      collection_number_of_objects: number;
      collection_id: number;
      collection_name: string;
      collection_description: string;
      collection_link: string;
      collection_image: string;
      collection_url: string;
      collection_mail: string;
      collection_last_updated: string;
    }
  ];
  expected_language: string;
};

export type CompactObjectType = {
  objekt_id: number;
  objekt_name: string;
  objekt_inventarnr: string;
  objekt_erfasst_am: string;
  institution_id: number;
  institution_name: string;
  image: string;
  total: number;
};

export type DetailedObjectType = {
  object_id: number;
  object_inventory_number: string;
  object_type: string;
  object_name: string;
  object_description: string;
  object_material_technique: string;
  object_dimensions: string;
  object_last_updated: string;
  object_institution: {
    institution_id: number;
    institution_name: string;
  };
  object_collection: [
    {
      collection_id: number;
      collection_name: string;
    }
  ];
  object_images: [
    {
      quell_id: number;
      name: string;
      is_main: string;
      order: number;
      folder: string;
      filename_loc: string;
      owner: string;
      creator: string;
      rights: string;
      type: string;
      intern: string;
      preview: string;
    }
  ];
};

export type FetchParamsType = {
  city: string;
  type: EntityType;
  id?: string;
  queryParam?: string;
};

export enum EntityType {
  institutions = "institutions",
  institution = "institution",
  collections = "collections",
  collection = "collection",
  objects = "objects",
  object = "object",
}

export type PathType = {
  inst?: { id: number; name: string };
  coll?: { id: number; name: string };
  obj?: { id: number; name: string };
};
