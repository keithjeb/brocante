// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateSeller = `subscription OnCreateSeller {
  onCreateSeller {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const onUpdateSeller = `subscription OnUpdateSeller {
  onUpdateSeller {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const onDeleteSeller = `subscription OnDeleteSeller {
  onDeleteSeller {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const onCreateAllocator = `subscription OnCreateAllocator {
  onCreateAllocator {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const onUpdateAllocator = `subscription OnUpdateAllocator {
  onUpdateAllocator {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const onDeleteAllocator = `subscription OnDeleteAllocator {
  onDeleteAllocator {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const onCreateItemType = `subscription OnCreateItemType {
  onCreateItemType {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const onUpdateItemType = `subscription OnUpdateItemType {
  onUpdateItemType {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const onDeleteItemType = `subscription OnDeleteItemType {
  onDeleteItemType {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const onCreateCart = `subscription OnCreateCart {
  onCreateCart {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const onUpdateCart = `subscription OnUpdateCart {
  onUpdateCart {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const onDeleteCart = `subscription OnDeleteCart {
  onDeleteCart {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const onCreateContent = `subscription OnCreateContent {
  onCreateContent {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
export const onUpdateContent = `subscription OnUpdateContent {
  onUpdateContent {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
export const onDeleteContent = `subscription OnDeleteContent {
  onDeleteContent {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
